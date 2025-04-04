import data from './data/news.json'

const News = (): JSX.Element => {
    return (
        <section className="grid" id="news">
            <h2 className="text-xl font-bold mt-12 mb-4">News</h2>
            <div className="text-base ml-4 text-gray-700">
                <ul className="list-disc">
                  {data.map((updateInfo) => (
                     <li> {updateInfo.date}: {updateInfo.description}</li>
                  ))}
                </ul>
            </div>

        </section>
    );
};



export default News;
