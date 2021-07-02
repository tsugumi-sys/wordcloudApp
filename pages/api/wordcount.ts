import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    data: { text: string, value: number }[]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    await fetch('https://scraper-nrbwnxr6da-uc.a.run.app/v1/word_count')
      .then(r => r.json())
      .then( data  => {
          let words = []
          for (const key in data) {
              words.push({
                  text: key,
                  value: data[key]
              })
           }
          console.log(words)
          res.status(200).json({ words })
      })
      .catch(({ err }) => {
          res.status(400).json({ err })
      })
}