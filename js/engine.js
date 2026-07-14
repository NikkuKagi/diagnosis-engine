const scoreKeys = [
    "creative",
    "steady",
    "communication",
    "challenge"
];

let scores = createEmptyScores();
let currentQuestion = 0;

const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const app = document.getElementById("app");

startButton.addEventListener("click", startDiagnosis);

function createEmptyScores() {
    return {
        creative: 0,
        steady: 0,
        communication: 0,
        challenge: 0
    };
}

function startDiagnosis() {
    scores = createEmptyScores();
    currentQuestion = 0;

    intro.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const currentData = questions[currentQuestion];
    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    app.innerHTML = `
        <div class="progress">
            <div
                class="progress-bar"
                style="width: ${progress}%"
            ></div>
        </div>

        <p class="question-number">
            質問 ${currentQuestion + 1} / ${questions.length}
        </p>

        <h2>${currentData.question}</h2>

        <div id="choiceList" class="choice-list"></div>
    `;

    const choiceList = document.getElementById("choiceList");

    currentData.choices.forEach(function (choice) {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = choice.text;
        button.className = "choice-button";

        button.addEventListener("click", function () {
            answerQuestion(choice.scores);
        });

        choiceList.appendChild(button);
    });
}

function answerQuestion(choiceScores) {
    scoreKeys.forEach(function (key) {
        scores[key] += choiceScores[key] ?? 0;
    });

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        return;
    }

    showResult();
}

function getHighestScoreKey() {
    return scoreKeys.reduce(function (highestKey, currentKey) {
        if (scores[currentKey] > scores[highestKey]) {
            return currentKey;
        }

        return highestKey;
    });
}

function calculateMaximumScores() {
    const maximumScores = createEmptyScores();

    questions.forEach(function (question) {
        scoreKeys.forEach(function (key) {
            const highestPoint = Math.max(
                ...question.choices.map(function (choice) {
                    return choice.scores[key] ?? 0;
                })
            );

            maximumScores[key] += highestPoint;
        });
    });

    return maximumScores;
}

function calculatePercentage(key) {
    const maximumScores = calculateMaximumScores();
    const maximumScore = maximumScores[key];

    if (maximumScore === 0) {
        return 0;
    }

    return Math.round((scores[key] / maximumScore) * 100);
}

function createScoreBreakdownHtml() {
    const scoreNames = {
        creative: "創作力",
        steady: "継続力",
        communication: "対人力",
        challenge: "挑戦力"
    };

    return scoreKeys
        .map(function (key) {
            const percentage = calculatePercentage(key);

            return `
                <div class="breakdown-item">
                    <div class="breakdown-heading">
                        <span>${scoreNames[key]}</span>
                        <strong>${percentage}%</strong>
                    </div>

                    <div class="breakdown-track">
                        <div
                            class="breakdown-bar"
                            style="width: ${percentage}%"
                        ></div>
                    </div>
                </div>
            `;
        })
        .join("");
}

function showResult() {
    const highestScoreKey = getHighestScoreKey();
    const matchedResult = results[highestScoreKey];
    const percentage = calculatePercentage(highestScoreKey);

    const recommendedJobsHtml = matchedResult.recommendedJobs
        .map(function (job) {
            return `<li>${job}</li>`;
        })
        .join("");

    app.innerHTML = `
        <section class="result-card result-${matchedResult.theme}">

            <p class="result-label">
                あなたの診断結果
            </p>

            <h2 class="result-title">
                ${matchedResult.title}
            </h2>

            <div
                class="score-circle"
                style="--score: ${percentage};"
                aria-label="${matchedResult.shortTitle}の適性スコア ${percentage}パーセント"
            >
                <div class="score-circle-inner">
                    <strong>${percentage}%</strong>
                    <span>タイプ適性</span>
                </div>
            </div>

            <p class="result-description">
                ${matchedResult.description}
            </p>

            <div class="score-breakdown">
                <h3>あなたの能力バランス</h3>

                ${createScoreBreakdownHtml()}
            </div>

            <div class="result-section">
                <h3>向いている副業</h3>

                <ul>
                    ${recommendedJobsHtml}
                </ul>
            </div>

            <div class="result-section">
                <h3>あまり向いていない副業</h3>

                <p>${matchedResult.notRecommended}</p>
            </div>

            <div class="result-section first-step">
                <h3>今日から始めること</h3>

                <p>${matchedResult.firstStep}</p>
            </div>

            <div class="share-area">
                <button id="shareButton" type="button">
                    Xで診断結果をシェア
                </button>

                <button
                    id="copyButton"
                    class="secondary-button"
                    type="button"
                >
                    結果をコピー
                </button>
            </div>

            <p
                id="copyMessage"
                class="copy-message"
                aria-live="polite"
            ></p>

            <button
                id="retryButton"
                class="retry-button"
                type="button"
            >
                もう一度診断する
            </button>

        </section>
    `;

    document
        .getElementById("shareButton")
        .addEventListener("click", function () {
            shareResult(matchedResult, percentage);
        });

    document
        .getElementById("copyButton")
        .addEventListener("click", function () {
            copyResult(matchedResult, percentage);
        });

    document
        .getElementById("retryButton")
        .addEventListener("click", resetDiagnosis);
}

function createShareText(result, percentage) {
    return [
        "AI副業適性診断をやってみました！",
        "",
        `診断結果：${result.shortTitle}`,
        `タイプ適性：${percentage}%`,
        "",
        "#AI副業適性診断",
        "#副業診断"
    ].join("\n");
}

function shareResult(result, percentage) {
    const text = createShareText(result, percentage);

    const shareUrl =
        "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text);

    window.open(
        shareUrl,
        "_blank",
        "noopener,noreferrer"
    );
}

async function copyResult(result, percentage) {
    const text = createShareText(result, percentage);
    const copyMessage = document.getElementById("copyMessage");

    try {
        await navigator.clipboard.writeText(text);
        copyMessage.textContent = "診断結果をコピーしました。";
    } catch (error) {
        copyMessage.textContent =
            "コピーできませんでした。文章を手動で選択してください。";
    }
}

function resetDiagnosis() {
    scores = createEmptyScores();
    currentQuestion = 0;

    app.innerHTML = "";
    intro.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}