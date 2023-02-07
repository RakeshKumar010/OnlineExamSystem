import './ContentSection.css'

const ContentSection = () => {
    return (
        <>
            <div className="contentSection">
                <nav>
                    <p>Q No: 1</p>
                    <div className="language">
                    <label htmlFor="view">View in: </label>
                    <select name="view" id="view">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                    </div>
                </nav>
                <main>
                    <div className="questionInstruction">
                        <h3>QUESTION INSTRUCTION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut labore optio provident perspiciatis architecto iure, consequuntur temporibus ab nisi, voluptates sunt, delectus accusamus corrupti maiores quibusdam fugiat perferendis dolorem!
                            Magnam perspiciatis saepe, recusandae vero non sit et laboriosam. Obcaecati repellendus numquam veritatis accusamus maiores voluptas? Repellat tempora saepe ducimus quis quo numquam quibusdam aperiam, vitae, consequatur praesentium voluptatem. Suscipit!
                            Similique et earum nihil ipsa commodi pariatur dignissimos quod, ipsum voluptatem provident sunt atque ab vel! Iusto deserunt laudantium dolore similique ea optio.
                            Nam autem quod ullam rerum sed asperiores repellat nihil laborum voluptatibus, hic optio eaque iste harum ipsum porro! Voluptas, molestias distinctio neque accusantium ipsam vitae voluptatem ut blanditiis. Nulla, ipsum.
                            Atque dignissimos doloremque, mollitia sapiente eum tempore maxime asperiores velit? Porro, odio officia impedit accusantium libero, recusandae vitae cupiditate magni dolorum, quam hic. Sint tempore pariatur sit, suscipit porro consequuntur?</p>
                    </div>
                    <div className="question">
                        <h3>QUESTION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut labore optio provident perspiciatis architecto iure, consequuntur temporibus ab nisi, voluptates sunt, delectus accusamus corrupti maiores quibusdam fugiat perferendis dolorem!
                            Magnam perspiciatis saepe, recusandae vero non sit et laboriosam. Obcaecati repellendus numquam veritatis accusamus maiores voluptas? Repellat tempora saepe ducimus quis quo numquam quibusdam aperiam, vitae, consequatur praesentium voluptatem. Suscipit!
                            Similique et earum nihil ipsa commodi pariatur dignissimos quod, ipsum voluptatem provident sunt atque ab vel! Iusto deserunt laudantium dolore similique ea optio.
                            Nam autem quod ullam rerum sed asperiores repellat nihil laborum voluptatibus, hic optio eaque iste harum ipsum porro! Voluptas, molestias distinctio neque accusantium ipsam vitae voluptatem ut blanditiis. Nulla, ipsum.
                            Atque dignissimos doloremque, mollitia sapiente eum tempore maxime asperiores velit? Porro, odio officia impedit accusantium libero, recusandae vitae cupiditate magni dolorum, quam hic. Sint tempore pariatur sit, suscipit porro consequuntur?</p>
                    </div>

                </main>
            </div>
        </>
    )
}

export default ContentSection