'use strict';

const form = {
    salutation: 'Мисис',
    name: 'Алевтина',
    subject: 'У меня важный вопрос',
    message: 'Как оформить доставку?',
    email: 'mis@test.co',
    snacks: ['пирог']
  };

  function App() {
    let output;
    return (
      <section className="content">
        <h1 className="content__heading">Отправить нам сообщение</h1>
        <p className="content__lede">Используйте эту простую форму чтобы связаться с нами.</p>
        <FeedbackForm data={form} onSubmit={data => output.value = data} />
        <output ref={field => output = field} />
      </section>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );