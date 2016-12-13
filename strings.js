/** Dependencies */
var Localize = require('localize');

const localize = new Localize({
  '👋 Hello there! *Voicy* is a voice recognition bot that converts all voice messages and audio files (.ogg, .flac, .wav, .mp3) it gets into text. Please, don\'t forget to set recognition language using /language command.\n\n*Voicy* supports two voice recognition engines: wit.ai (free) and Google Speech (more accurate). Initialy it\'s set to use wit.ai but you can switch to Google Speech anytime in /engine\n\nFor starters, you got *60 seconds* of Google Speech voice recognition for free. If you will need more Google Speech time, you can always purchase it here:\nhttps://pay.voicybot.com/$[1]\n\n...or just use free wit.ai forever 😀': {
    'en': '👋 Hello there! *Voicy* is a voice recognition bot that converts all voice messages and audio files (.ogg, .flac, .wav, .mp3) it gets into text. Please, don\'t forget to set recognition language using /language command.\n\n*Voicy* supports two voice recognition engines: wit.ai (free) and Google Speech (more accurate). Initialy it\'s set to use wit.ai but you can switch to Google Speech anytime in /engine\n\nFor starters, you got *60 seconds* of Google Speech voice recognition for free. If you will need more Google Speech time, you can always purchase it here:\nhttps://pay.voicybot.com/$[1]\n\n...or just use free wit.ai forever 😀',
    'ru': '👋 Привет! *Voicy* — это бот, который переводит в текст все голосовые сообщения и аудио файлы (.ogg, .flac, .wav, .mp3), которые получает. Не забудьте установить язык распознавания речи командой /language.\n\n*Voicy* поддерживает два движка распознавания речи: wit.ai (бесплатный) и Google Speech (более точный, но платный). Изначально бот выбирает бесплатный wit.ai, но вы можете сменить движок на Google Speech, используя команду /engine.\n\nДля ознакомления, мы даем вам *60 секунд* Google Speech в подарок. Если вам понадобится больше секунд Google Speech, вы всегда можете приобрести их по ссылке:\nhttps://pay.voicybot.com/$[1]\n\n...или просто используйте бесплатный wit.ai 😀',
  },
  '👋 Hello there! *Voicy* is a voice recognition bot that converts all voice messages and audio files (.ogg, .flac, .wav, .mp3) it gets into text. Please, don\'t forget to set recognition language using /language command.\n\n*Voicy* supports two voice recognition engines: wit.ai (free) and Google Speech (more accurate). Initialy it\'s set to use wit.ai but you can switch to Google Speech anytime in /engine\n\nSo far you have *$[1] seconds* of Google Speech voice recognition left. If you will need more Google Speech time, you can always purchase it here:\nhttps://pay.voicybot.com/$[2]\n\n...or just use free wit.ai forever 😀': {
    'en': '👋 Hello there! *Voicy* is a voice recognition bot that converts all voice messages and audio files (.ogg, .flac, .wav, .mp3) it gets into text. Please, don\'t forget to set recognition language using /language command.\n\n*Voicy* supports two voice recognition engines: wit.ai (free) and Google Speech (more accurate). Initialy it\'s set to use wit.ai but you can switch to Google Speech anytime in /engine\n\nSo far you have *$[1] seconds* of Google Speech voice recognition left. If you will need more Google Speech time, you can always purchase it here:\nhttps://pay.voicybot.com/$[2]\n\n...or just use free wit.ai forever 😀',
    'ru': '👋 Привет! *Voicy* — это бот, который переводит в текст все голосовые сообщения и аудио файлы (.ogg, .flac, .wav, .mp3), которые получает. Не забудьте установить язык распознавания речи командой /language.\n\n*Voicy* поддерживает два движка распознавания речи: wit.ai (бесплатный) и Google Speech (более точный, но платный). Изначально бот выбирает бесплатный wit.ai, но вы можете сменить движок на Google Speech, используя команду /engine.\n\nУ вас осталось *$[1] секунд* Google Speech в этом чате. Если вам понадобится больше секунд Google Speech, вы всегда можете приобрести их по ссылке:\nhttps://pay.voicybot.com/$[2]\n\n...или просто используйте бесплатный wit.ai 😀',
  },
  '🎉 Unfortunately, being the most superior voice recognition engine, Google Speech is not free. If you want to keep using free wit.ai for voice recognition, no need to do anything. However, if you want to use Google Speech you have to cover it\'s costs.\n\nThis chat has *$[1] seconds* of Google Speech voice recognition left.\n\nAnybody can buy more Google Speech seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[2].': {
    'en': '🎉 Unfortunately, being the most superior voice recognition engine, Google Speech is not free. If you want to keep using free wit.ai for voice recognition, no need to do anything. However, if you want to use Google Speech you have to cover it\'s costs.\n\nThis chat has *$[1] seconds* of Google Speech voice recognition left.\n\nAnybody can buy more Google Speech seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[2].',
    'ru': '🎉 К сожалению, Google Speech — более точный переводчик речи в текст — не бесплатен. Если вы хотите и дальше использовать бесплатный wit.ai — просто проигнорируйте это сообщение. Однако если вы хотите использовать Google Speech, вам придётся оплатить стоимость распознавания.\n\nУ этого чата осталось еще *$[1] секунд* Google Speech.\n\nКто угодно может купить больше секунд Google Speech по цене *$0.4 за 200 секунд* по ссылке:\nhttps://pay.voicybot.com/$[2].',
  },
  '🎉 Unfortunately, being the most superior voice recognition engine, Google Speech is not free. If you want to switch to free wit.ai for voice recognition, please do so in /engine. However, if you want to stick to Google Speech you have to cover it\'s costs.\n\nThis chat has *$[1] seconds* of Google Speech voice recognition left.\n\nAnybody can buy more Google Speech seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[2].': {
    'en': '🎉 Unfortunately, being the most superior voice recognition engine, Google Speech is not free. If you want to switch to free wit.ai for voice recognition, please, do so in /engine. However, if you want to stick to Google Speech you have to cover it\'s costs.\n\nThis chat has *$[1] seconds* of Google Speech voice recognition left.\n\nAnybody can buy more Google Speech seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[2].',
    'ru': '🎉 К сожалению, Google Speech — более точный переводчик речи в текст — не бесплатен. Если вы хотите перейти на бесплатный wit.ai — используйте команду /engine. Однако если вы хотите продолжить использовать Google Speech, вам придётся оплатить стоимость распознавания.\n\nУ этого чата осталось еще *$[1] секунд* Google Speech.\n\nКто угодно может купить больше секунд Google Speech по цене *$0.4 за 200 секунд* по ссылке:\nhttps://pay.voicybot.com/$[2].',
  },
  '😮 It looks like this chat has *no more seconds* of Google Speech voice recognition left! But no worries — we have automatically switched you to the free wit.ai so that no voice messages are getting lost. Don\'t forget to setup your /language.\n\nHowever if you would like to keep using Google Speech you will have to switch back in /engine and cover it\'s costs 💰\n\nAnybody can buy more seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[1].': {
    'en': '😮 It looks like this chat has *no more seconds* of Google Speech voice recognition left! But no worries — we have automatically switched you to the free wit.ai so that no voice messages are getting lost. Don\'t forget to setup your /language.\n\nHowever if you would like to keep using Google Speech you will have to switch back in /engine and cover it\'s costs 💰\n\nAnybody can buy more seconds for the price of *$0.4 per 200 seconds* here:\nhttps://pay.voicybot.com/$[1].',
    'ru': '😮 Похоже, у этого чата больше *нет секунд* Google Speech! Но ничего страшного — мы автоматически перевели вас на бесплатный wit.ai, чтобы не потерять ни одного голосового сообщения. Обязательно установите язык командой /language!\n\nОднако если вы хотите продолжить использовать Google Speech, вам нужно сменить движок командой /engine и оплатить стоимость распознавания 💰\n\nКто угодно может купить больше секунд Google Speech по цене *$0.4 за 200 секунд* по ссылке:\nhttps://pay.voicybot.com/$[1].',
  },
  '😎 *Voicy* converts speech to text from any voice messages and audio files (.ogg, .flac, .wav, .mp3) it receives. You can either talk to *Voicy* in the private chat or add it to a group.\n\n/help — Shows this message 😱\n/engine — Lets you pick a voice recognition engine: wit.ai (free) or Google Speech (more accurate) ⚙\n/language — Lets you pick a voice recognition language 📣\n/balance — Shows how many Google Speech voice recognition seconds are left for this chat 🎉\n\nLike this bot? Leave a review here: https://telegram.me/storebot?start=voicybot\n\nAddress any concerns and questions to my creator — @borodutch 🦄': {
    'en': '😎 *Voicy* converts speech to text from any voice messages and audio files (.ogg, .flac, .wav, .mp3) it receives. You can either talk to *Voicy* in the private chat or add it to a group.\n\n/help — Shows this message 😱\n/engine — Lets you pick a voice recognition engine: wit.ai (free) or Google Speech (more accurate) ⚙\n/language — Lets you pick a voice recognition language 📣\n/balance — Shows how many Google Speech voice recognition seconds are left for this chat 🎉\n\nLike this bot? Leave a review here: https://telegram.me/storebot?start=voicybot\n\nAddress any concerns and questions to my creator — @borodutch 🦄',
    'ru': '😎 *Voicy* переводит в текст все голосовые сообщения, которые получает. Вы можете говорить с ботом напрямую или добавить его в группу.\n\n/help — Показать это сообщение 😱\n/engine — Выбрать движок распознавания речи: wit.ai (бесплатный) или Google Speech (более точный, но платный) ⚙\n/language — Выбрать язык распознавания речи 📣\n/balance — Посмотреть, сколько секунд Google Speech осталось 🎉\n\nНравится бот? Оставьте свой отзыв по ссылке: https://telegram.me/storebot?start=voicybot\n\nВопросы и предложения направляйте моему создателю — @borodutch 🦄',
  },
  '👋 Please, select the engine of speech recognition. Google Speech is more accurate, private (your messages will never go public), support audio longer than 50 seconds, but not free. Wit.ai is less accurate, public (your messages go to wit.ai public database), free, but doesn\'t support audio longer than 50 seconds.\n\nThey also have different list of supported languages:\n\n*wit.ai*: `Albanian, Arabic, Azerbaijani, Bengali, Bosnian, Bulgarian, Burmese, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Georgian, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Korean, Latin, Lithuanian, Macedonian, Malay, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian and Vietnamese.`\n\n*Google Speech*: `Afrikaans, Indonesian, Malay, Catalan, Czech, Danish, German, English (Australia, Canada, United Kingdom, India, Ireland, New Zealand, Philippines, South Africa, United States), Spanish (Argentina, Bolivia, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Spain, United States, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Dominican Republic, Uruguay, Venezuela), Basque,  Filipino, French, Galician, Croatian, Zulu, Icelandic, Italian, Lithuanian, Hungarian, Dutch, Norwegian Bokmål, Polish, Portuguese (Brazil, Portugal), Romanian, Slovak, Slovenian, Finnish, Swedish, Vietnamese, Turkish, Greek, Bulgarian, Russian, Serbian, Ukrainian, Hebrew, Arabic (Israel, Jordan, United Arab Emirates, Bahrain, Algeria, Saudi Arabia, Iraq, Kuwait, Morocco, Tunisia, Oman, State of Palestine, Qatar, Lebanon, Egypt), Persian, Hindi, Thai, Korean, Mandarin (Traditional, Taiwan; Simplified, Hong Kong; Simplified, China), Cantonese (Traditional, Hong Kong), Japanese (Japan).`': {
    'en': '👋 Please, select the engine of speech recognition. Google Speech is more accurate, private (your messages will never go public), support audio longer than 50 seconds, but not free. Wit.ai is less accurate, public (your messages go to wit.ai public database), free, but doesn\'t support audio longer than 50 seconds.\n\nThey also have different list of supported languages:\n\n*wit.ai*: `Albanian, Arabic, Azerbaijani, Bengali, Bosnian, Bulgarian, Burmese, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Georgian, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Korean, Latin, Lithuanian, Macedonian, Malay, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian and Vietnamese.`\n\n*Google Speech*: `Afrikaans, Indonesian, Malay, Catalan, Czech, Danish, German, English (Australia, Canada, United Kingdom, India, Ireland, New Zealand, Philippines, South Africa, United States), Spanish (Argentina, Bolivia, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Spain, United States, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Dominican Republic, Uruguay, Venezuela), Basque,  Filipino, French, Galician, Croatian, Zulu, Icelandic, Italian, Lithuanian, Hungarian, Dutch, Norwegian Bokmål, Polish, Portuguese (Brazil, Portugal), Romanian, Slovak, Slovenian, Finnish, Swedish, Vietnamese, Turkish, Greek, Bulgarian, Russian, Serbian, Ukrainian, Hebrew, Arabic (Israel, Jordan, United Arab Emirates, Bahrain, Algeria, Saudi Arabia, Iraq, Kuwait, Morocco, Tunisia, Oman, State of Palestine, Qatar, Lebanon, Egypt), Persian, Hindi, Thai, Korean, Mandarin (Traditional, Taiwan; Simplified, Hong Kong; Simplified, China), Cantonese (Traditional, Hong Kong), Japanese (Japan).`',
    'ru': '👋 Выберите движок распознавания речи. Google Speech — более точный, приватный (ваши сообщения никогда не станут достоянием общественности), поддерживает аудио длиннее 50 секунд, но не бесплатный. Wit.ai — менее точный, публичный (данные хранятся в открытом доступе на wit.ai), не поддерживает аудио длиннее 50 секунд, но бесплатный.\n\nСписки поддерживаемых языков тоже разнятся:\n\n*wit.ai*: `Albanian, Arabic, Azerbaijani, Bengali, Bosnian, Bulgarian, Burmese, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Georgian, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Korean, Latin, Lithuanian, Macedonian, Malay, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Vietnamese.`\n\n*Google Speech*: `Afrikaans, Indonesian, Malay, Catalan, Czech, Danish, German, English (Australia, Canada, United Kingdom, India, Ireland, New Zealand, Philippines, South Africa, United States), Spanish (Argentina, Bolivia, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Spain, United States, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Dominican Republic, Uruguay, Venezuela), Basque,  Filipino, French, Galician, Croatian, Zulu, Icelandic, Italian, Lithuanian, Hungarian, Dutch, Norwegian Bokmål, Polish, Portuguese (Brazil, Portugal), Romanian, Slovak, Slovenian, Finnish, Swedish, Vietnamese, Turkish, Greek, Bulgarian, Russian, Serbian, Ukrainian, Hebrew, Arabic (Israel, Jordan, United Arab Emirates, Bahrain, Algeria, Saudi Arabia, Iraq, Kuwait, Morocco, Tunisia, Oman, State of Palestine, Qatar, Lebanon, Egypt), Persian, Hindi, Thai, Korean, Mandarin (Traditional, Taiwan; Simplified, Hong Kong; Simplified, China), Cantonese (Traditional, Hong Kong), Japanese (Japan).`',
  },
  '👍 Now *Voicy* uses *$[1]* in this chat. Thank you! Don\'t forget to set /language.': {
    'en': '👍 Now *Voicy* uses *$[1]* in this chat. Thank you! Don\'t forget to set /language.',
    'ru': '👍 Теперь *Voicy* использует *$[1]* в этом чате. Спасибо! Не забудьте установить /language (язык).',
  },
  '👋 Please select the language of speech recognition for $[1].': {
    'en': '👋 Please, select the language of speech recognition for $[1].',
    'ru': '👋 Выберите язык распознавания речи для $[1].',
  },
  '👋 Please select the language of speech recognition for wit.ai.': {
    'en': '👋 Please, select the language of speech recognition for wit.ai.',
    'ru': '👋 Выберите язык распознавания речи для wit.ai.',
  },
  '👍 Now *Voicy* speaks *$[1]* (wit.ai) in this chat. Thank you!': {
    'en': '👍 Now *Voicy* speaks *$[1]* (wit.ai) in this chat. Thank you!',
    'ru': '👍 Теперь *Voicy* понимает *$[1]* (wit.ai) в этом чате. Спасибо!',
  },
  '👋 Please select the language of speech recognition for Google Speech.': {
    'en': '👋 Please, select the language of speech recognition for Google Speech.',
    'ru': '👋 Выберите язык распознавания речи для Google Speech.',
  },
  '👍 Now *Voicy* speaks *$[1]* (Google Speech) in this chat. Thank you!': {
    'en': '👍 Now *Voicy* speaks *$[1]* (Google Speech) in this chat. Thank you!',
    'ru': '👍 Теперь *Voicy* понимает *$[1]* (Google Speech) в этом чате. Спасибо!',
  },
  '😮 You didn\'t have enough seconds of Google Speech voice recognition left to convert this voice message! But no worries — we have automatically switched you to the free wit.ai so that no voice messages are getting lost. Don\'t forget to setup your /language.': {
    'en': '😮 You didn\'t have enough seconds of Google Speech voice recognition left to convert this voice message! But no worries — we have automatically switched you to the free wit.ai so that no voice messages are getting lost. Don\'t forget to setup your /language.',
    'ru': '😮 У вас не хватило секунд Google Speech для распознавания этого голосового сообщения! Но ничего страшного — мы автоматически перели ваш чат на бесплатный wit.ai, чтобы не потерять ни одного сообщения. Не забудьте указать ваш язык командой /language!',
  },
  '_👮 I can\'t recognize voice messages larger than 20 megabytes._': {
    'en': '_👮 I can\'t recognize voice messages larger than 20 megabytes._',
    'ru': '_👮 Я не умею распознавать аудио тяжелее 20 мегабайт',
  },
  '_🦄 Voice recognition is initiated..._': {
    'en': '_🦄 Voice recognition is initiated..._',
    'ru': '_🦄 Распознавание речи инициировано..._',
  },
  '_👮 Please, speak clearly, I couldn\'t recognize that_': {
    'en': '_👮 Please, speak clearly, I couldn\'t recognize that._',
    'ru': '_👮 Пожалуйста, говорите четче, у меня не получилось распознать вашу речь._',
  },
  '😅 Looks like you have already applied Product Hunt discount. Your first 100,000 Google Speech seconds are 50% off. Enjoy! 🐱': {
    'en': '😅 Looks like you have already applied Product Hunt discount. Your first 100,000 Google Speech seconds are 50% off. Enjoy! 🐱',
    'ru': '😅 Похоже, вы уже использовали скидку с Product Hunt. Ваши первые 100,000 Google Speech секунд уже на 50% дешевле. Спасибо! 🐱',
  },
  '🔥 Look who applied Product Hunt discount to @voicybot! Enjoy your first 100,000 Google Speech seconds at 50% the price! 🦄': {
    'en': '🔥 Look who applied Product Hunt discount to @voicybot! Enjoy your first 100,000 Google Speech seconds at 50% the price! 🦄',
    'ru': '🔥 Смотрите, кто использовал скидку с Product Hunt в @voicybot! Наслаждайтесь первыми 100,000 Google Speech секундами с 50% скидкой! 🦄',
  },
});

/** Exports */
module.exports = localize;
