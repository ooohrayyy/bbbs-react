Инструкция по использованию компонентов модальных окон.
После описания компонентов будет краткая инструкция по самому модулю react-modal, рекомендую для ознакомления, там кратко самая выборка.

Компонент подтверждения Confirmation 
props 
  title: PropTypes.string, Надпись в окне
  isOpen: bool  собственно открыто или закрыто окно
  handleConfirm: PropTypes.func, Колбэк при нажатии на согласие
  butConf: PropTypes.string, Надпись на кнопке согласия, необязательна, по умолчанию "Подтвердить запись"
  butEsc: PropTypes.string, Надпись на кнопке отказа, необязательна, по умолчанию "Отменить"

Компонент Успешной записи на мероприятие Done
props
    title: string Надпись в окне, первая строка с названием события и временем его проведения
    isOpen: bool Уже понятно

Авторизация Signin
props
  isOpen: bool  собственно открыто или закрыто окно
  handleSignin: PropTypes.func, Колбэк при нажатии на Войти





Импортируем библиотеку
import Modal from 'react-modal';

Использование

Перед созданием функции (компонента) определяем переменные

Modal.setAppElement('#yourAppElement')
Это обязательное определение, ссылка на элемент DOM который должен затемниться, когда открывается модалка.
Можно использовать id в родительском блоке, затем его сюда вставить, например:
Modal.setAppElement('#root');
или
Modal.setAppElement(document.getElementById('root'));

Короче как угодно.
Если затемнение главного окна уже прописано и не нужно в модалке, то тогда нужно в Компонент передать пропс 
ariaHideApp={false}

Далее уже в функции определяем стэйт для открытия и закрытия модалки

  const [modalIsOpen,setIsOpen] = React.useState(true); - сразу ставлю истину, потому-что компонент мы вызываем когда уже нужно открытие. 
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

Дальше идет JSX 

    return (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal} - Функция после открытия, если нужна, можно пропустить
          onRequestClose={closeModal}  - функция выполняемая при закрытии модального окна, особенно важно если закрытие не по крестику, где можно и так обработать, а по Esc или клике в оверлэй
          style={customStyles}
          contentLabel="Example Modal" - можно передать пропсом или задать напрямую лэйбл для модалки, потом внутри использовать в  jsx как _content
          shouldCloseOnOverlayClick={false} - должно ли закрываться окно при клике на оверлэй
          shouldCloseOnEsc={false} - должно ли закрываться при нажатии Esc
        >

          <h2>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
    );

Стили затемнения родительского окна и самого модального описываются на css, ниже стили по умолчанию, ну и как пример, как их задавать

<Modal
  ...
  style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
  ...
>
Если нужно мягкое открытие или закрытие модального окна, то в css модуля или в глобальном каком-то можно прописать:

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}