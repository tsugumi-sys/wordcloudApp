import type { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    await fetch('https://scraper-nrbwnxr6da-uc.a.run.app/v1/test')
      .then(r => r.json())
      .then( data  => {
          console.log(data)
          res.status(200).json( data )
      })
      .catch(({ err }) => {
          res.status(400).json({ err })
      })
}