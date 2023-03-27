import styles from "@/styles/Home.module.css";
import Head from "next/head";
import {ChangeEvent, useCallback, useState} from "react";
import Editor from "@/components/Editor";
import Template from "@/components/Template";
import {TemplateProps} from "@/types/template";



function Home(){
    const [templateData,setTemplateData] = useState({} as Omit<TemplateProps, 'onChange'>);

    const handleUpdateTemplate = useCallback((e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const { name, value } = e.target;
        setTemplateData((prev)=> ({...prev, [name]:value}));
    },[]);

    return (
      <>
        <Head>
          <title>Home | Web Editor</title>
        </Head>
        <div className={styles.main}>
            <Editor {...templateData} onChange={handleUpdateTemplate} />
            <Template {...templateData} />
        </div>
      </>
    )
}

export default Home