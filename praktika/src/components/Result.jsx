import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../features/quiz/quizSlice';
import './Result.css';


const Result = () => {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.quiz);

  const totalScore = answers.reduce((sum, answer) => sum + (answer?.score || 0), 0);

  const getResultMessage = () => {
    if (totalScore >= 6 && totalScore <= 9) {
      return {
        title: 'Чиловый Уж',
        description: 'Вы мастер расслабленного подхода. Ваш бизнес строится на спокойствии, гармонии и отсутствии стресса. Вы точно знаете, как получать удовольствие от процесса.'
      };
    } else if (totalScore >= 10 && totalScore <= 13) {
      return {
        title: 'Ламповая Змея-поддержка',
        description: 'Ваш бизнес — это уют и забота. Вы умеете создавать атмосферу доверия, в которой ваши клиенты и команда чувствуют себя максимально комфортно.'
      };
    } else if (totalScore >= 14 && totalScore <= 17) {
      return {
        title: 'Хайповая Мамба',
        description: 'Ваш стиль — тренды, шум и хайп. Вы всегда находитесь в центре внимания, а ваши проекты привлекают интерес своими инновациями и яркостью.'
      };
    } else if (totalScore >= 18 && totalScore <= 21) {
      return {
        title: 'Темщик Эфа',
        description: 'Вы прирожденный генератор идей и движений. Вы всегда знаете, как поджечь рынок своей уникальной задумкой, и умеете вдохновлять окружающих.'
      };
    } else if (totalScore >= 22 && totalScore <= 25) {
      return {
        title: 'Флекс-Кобра',
        description: 'Ваши успехи — это ваша визитная карточка. Вы обожаете демонстрировать свои достижения, мотивируя окружающих своим примером.'
      };
    } else if (totalScore >= 26 && totalScore <= 29) {
      return {
        title: 'Лютый Королевский Кобрик',
        description: 'Вы — босс в мире бизнеса. Ваш авторитет непререкаем, а ваше дело всегда ассоциируется с лидерством и успехом.'
      };
    } else if (totalScore >= 30 && totalScore <= 33) {
      return {
        title: 'Драма-Гадюка',
        description: 'Вы мастер создавать из обычного кризиса настоящую бурю. Но ваш талант в том, чтобы использовать этот ажиотаж для пользы бизнеса.'
      };
    } else if (totalScore >= 34 && totalScore <= 37) {
      return {
        title: 'Токсичный Удав',
        description: 'Вы не боитесь быть резким, если это ведет к успеху. Ваш сарказм и упорство буквально "душат" конкурентов и заставляют их сдаваться.'
      };
    } else if (totalScore >= 38 && totalScore <= 41) {
      return {
        title: 'Бизнес-Тайпан на минималках',
        description: 'Вы умеете экономить, как никто другой. Ваш подход — делать максимум с минимумом, и это всегда приносит результат.'
      };
    } else if (totalScore >= 42 && totalScore <= 45) {
      return {
        title: 'Нормис Кобрик',
        description: 'Вы аккуратный и расчетливый предприниматель. Риск для вас — это не игра, а инструмент, который вы умело используете.'
      };
    } else if (totalScore >= 46 && totalScore <= 49) {
      return {
        title: 'Змея-продажник из чата',
        description: 'Ваши переговорные навыки — чистая магия. Вы умеете убеждать и продавать так, что никто не может устоять перед вашим предложением.'
      };
    } else if (totalScore >= 50 && totalScore <= 54) {
      return {
        title: 'Питон-доставала',
        description: 'Вы не отпускаете свои цели, пока не достигнете их. Ваша хватка впечатляет, а конкуренты уже сдаются.'
      };
    } else if (totalScore >= 55 && totalScore <= 59) {
      return {
        title: 'Крафтовая Гарпия',
        description: 'Вы делаете ставку на уникальность и качество. Ваш подход может быть нестандартным, но он всегда работает на успех.'
      };
    } else if (totalScore >= 60 && totalScore <= 64) {
      return {
        title: 'Змей Горыныч',
        description: 'Вы мультизадачны и невероятно продуктивны. Вы жонглируете проектами так, что кажется, будто у вас три головы (а может, и правда?).'
      };
    } else {
      return {
        title: 'Неизвестный результат',
        description: 'Похоже, ваш результат выходит за пределы наших ожиданий. Попробуйте пройти тест еще раз!'
      };
    }
  };

  const result = getResultMessage();

  const shareText = `Я ${result.title}, узнай, какая ты змея в мире бизнеса на сайте.`;
  const shareUrl = window.location.href;

  const share = (platform) => {
    const links = {
      vk: `https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    };
    window.open(links[platform], '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="result-container">
      <h2 className='ResultName'>Вы - {result.title}</h2>
      <p>{result.description}</p>
      <span className='shareText'>Поделиться</span>
      <div className="share-buttons">
        <button className="share-button" onClick={() => share('vk')}>
          <img width="22" height="22" src="https://img.icons8.com/color/48/vk-com.png" alt="vk-com"/> вк
        </button>
        <button className="share-button" onClick={() => share('telegram')}>
          <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-telegram-is-a-cloud-based-instant-messaging-and-voice-over-ip-service-logo-shadow-tal-revivo.png" alt="external-telegram-is-a-cloud-based-instant-messaging-and-voice-over-ip-service-logo-shadow-tal-revivo"/> telegram
        </button>
        <button className="share-button" onClick={() => share('facebook')}>
          <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-famous-social-media-online-social-media-and-social-networking-service-facebook-logo-color-tal-revivo.png" alt="external-famous-social-media-online-social-media-and-social-networking-service-facebook-logo-color-tal-revivo"/> facebook
        </button>
        <button className="share-button" onClick={() => share('twitter')}>
          <img width="20" height="20" src="https://img.icons8.com/fluency/50/twitter.png" alt="twitter"/> twitter
        </button>
      </div>
      <button className='repeatButton' onClick={() => dispatch(resetQuiz())}><span>↻</span> Пройти заново</button>
    </div>
  );
};

export default Result;

