import ReactWordcloud from "react-wordcloud";
import { Resizable } from 're-resizable'
import useSWR from 'swr'
import Link from 'next/link'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import { GetStaticProps, GetServerSideProps } from 'next'

// export const getStaticProps: GetStaticProps = async context => {
//   const data = [
//     {
//         text: 'told',
//         value: 64,
//       },
//       {
//         text: 'mistake',
//         value: 11,
//       },
//       {
//         text: 'thought',
//         value: 16,
//       },
//       {
//         text: 'bad',
//         value: 17,
//       },
//   ]

//   return {
//       props: { data },
//   }
// }

type AppProps = {
    data: { text: string, value: number }[]
}

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
}

const App = () => {
    async function fetcher(url: string): Promise<boolean | null> {
        const res = await fetch(url)
        return res.json()
    }

    const { data, error } = useSWR('/api/wordcount', fetcher)

    if (!data) return <h1>Loading ...</h1>
    if (error) return <h1>Error</h1>
    
    return (
        <div>
            <h1>TEST</h1>
            <Resizable
              defaultSize={{
                  width: 600,
                  height: 300,
              }}
              style={resizeStyle}
            >
                <div style={{ width: '100%', height: '100%' }}>
                   <ReactWordcloud words={data.words} />
                </div>
            </Resizable>
            <Link href='/'>
                <a>Back to Top</a>
            </Link>
        </div>
    )
}

export default App