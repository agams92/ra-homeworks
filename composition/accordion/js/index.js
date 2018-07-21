'use strict';

class Accordion extends React.Component {
    render() {
        const {content, title} = this.props;
        const sectionsToRender = content.map(section => {
            return(
                <AccordionSection content={section} />
            );
        })
        return(
            <main className='main'>
                <h2 className='title'>{title}</h2>
                {sectionsToRender}
            </main>
        );
    }
}

class AccordionSection extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            hidden: true
        }
    }

    toggleSection() {
        this.setState({hidden: !this.state.hidden})
    }

    render() {
        const {id, title, text} = this.props.content;
        const isOpened = this.state.hidden ? '' : 'open';
        return(
            <section className={`section ${isOpened}`} key={id}>
                <button>toggle</button>
                <h3 className='sectionhead' onClick={this.toggleSection.bind(this)}>{title}</h3>
                <div className='articlewrap'>
                    <div className='article'>{text}</div>
                </div>
            </section>
        );
    }
}