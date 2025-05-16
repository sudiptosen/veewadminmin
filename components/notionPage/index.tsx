import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle } from 'notion-utils'
import { NotionRenderer } from 'react-notion-x'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Code } from 'react-notion-x/build/third-party/code'

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'
// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

export const NotionPage = ({
                             recordMap,
                             rootPageId
                           }: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }

  const title = getPageTitle(recordMap)
  console.log(title, recordMap)

  return (
    <div className="w-full bg-paper opacity-80">
      <NotionRenderer
        components={{
          Equation,
          Code
        }}
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </div>
  )
}
