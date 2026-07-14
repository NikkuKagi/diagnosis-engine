const questions = [
    {
        question: "新しいAIツールを見つけたとき、どうしますか？",
        choices: [
            {
                text: "すぐ試して作品やサービスを作る",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 2
                }
            },
            {
                text: "使い方を調べてから試す",
                scores: {
                    creative: 1,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "詳しい人に教えてもらう",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "副業の作業スタイルとして、最も理想に近いものは？",
        choices: [
            {
                text: "自分のアイデアを自由に形にしたい",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "決めた作業を毎日積み上げたい",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "人と相談しながら進めたい",
                scores: {
                    creative: 0,
                    steady: 1,
                    communication: 2,
                    challenge: 0
                }
            }
        ]
    },
    {
        question: "分からないことにぶつかったとき、最初にすることは？",
        choices: [
            {
                text: "いろいろ試しながら解決方法を探す",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 2
                }
            },
            {
                text: "順番に検索して情報を整理する",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "詳しい人やコミュニティに質問する",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "どの成果に一番やりがいを感じますか？",
        choices: [
            {
                text: "自分だけの作品が完成したとき",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "昨日より少し成長できたとき",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "相手に喜んでもらえたとき",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 0
                }
            }
        ]
    },
    {
        question: "成果が出るまで3か月かかる副業に挑戦できますか？",
        choices: [
            {
                text: "面白そうなら挑戦できる",
                scores: {
                    creative: 1,
                    steady: 0,
                    communication: 0,
                    challenge: 2
                }
            },
            {
                text: "計画を立てれば継続できる",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "誰かと一緒なら続けられる",
                scores: {
                    creative: 0,
                    steady: 1,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "SNSを副業に使うなら、何をしたいですか？",
        choices: [
            {
                text: "画像・動画・文章を発信する",
                scores: {
                    creative: 2,
                    steady: 1,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "毎日役立つ情報を投稿する",
                scores: {
                    creative: 1,
                    steady: 2,
                    communication: 0,
                    challenge: 0
                }
            },
            {
                text: "コメントや相談に対応する",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "1日30分の作業を1か月続けることについて、どう思いますか？",
        choices: [
            {
                text: "同じ内容だと飽きそう",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "習慣にすれば続けられる",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "進捗を誰かと共有できれば続けられる",
                scores: {
                    creative: 0,
                    steady: 1,
                    communication: 2,
                    challenge: 0
                }
            }
        ]
    },
    {
        question: "仕事を頼まれたとき、最も得意なのは？",
        choices: [
            {
                text: "見た目や内容を工夫すること",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "期限どおり正確に仕上げること",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 0
                }
            },
            {
                text: "相手の希望を聞き出すこと",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "副業で最も避けたいことは？",
        choices: [
            {
                text: "自由に工夫できないこと",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 0
                }
            },
            {
                text: "収入や作業量が安定しないこと",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 0
                }
            },
            {
                text: "一人で悩み続けること",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    },
    {
        question: "将来的にどの状態を目指したいですか？",
        choices: [
            {
                text: "自分の商品やサービスを作りたい",
                scores: {
                    creative: 2,
                    steady: 0,
                    communication: 0,
                    challenge: 2
                }
            },
            {
                text: "安定して毎月収入を積み上げたい",
                scores: {
                    creative: 0,
                    steady: 2,
                    communication: 0,
                    challenge: 1
                }
            },
            {
                text: "人から頼られる仕事をしたい",
                scores: {
                    creative: 0,
                    steady: 0,
                    communication: 2,
                    challenge: 1
                }
            }
        ]
    }
];