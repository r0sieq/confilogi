import './Faq.css'
import Question from './Question/Question'

export default function Faq(){
    return (
        <section className="faq">
            <div className="content">
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us</p>
            </div>
            <div className="questions">
                <Question question='What is Bookmark?'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod in at! Deleniti provident facere, eius ratione itaque explicabo odio? In itaque error nam corporis mollitia ea odit repellendus totam.
                </Question>
                <Question question='How can i request a new browser?'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, iusto, asperiores commodi atque impedit, veniam velit iure quaerat molestias laudantium obcaecati suscipit eos. Recusandae at facere, provident illo eum minima.
                </Question>
                <Question question='Is there a mobile app?'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt aliquid beatae consectetur dicta natus nemo? Laboriosam repellat commodi aperiam perspiciatis id? Eius optio ipsam, consectetur doloribus cum accusamus natus!
                </Question>
                <Question question='What about other Chromium browsers?'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor blanditiis ea vero voluptate, harum praesentium qui possimus aut ipsa eum veritatis, earum, quod nostrum saepe. Id magni minima illo vel.
                </Question>
            </div>
            <button className="primary">More info</button>
        </section>
    )
}