import Head from "next/head";
import styles from './index.module.scss'
export default function Layout ({ children}) {
  return (
    <div className={styles.body}>
      <Head>
        <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <title>标题内容</title>
          <meta name="keywords" content="描述"></meta>
          <meta name="description" content="描述"></meta>
      </Head>
      {children}
    </div>
  )
}