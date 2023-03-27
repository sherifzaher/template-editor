import styles from '@/styles/Home.module.css';
import Input from "@/components/UI/Input";
import {TemplateProps} from "@/types/template";
function Editor(data:TemplateProps){
   const { buttonLink, buttonTitle, image, title, description, onChange} = data;
    return (
        <div className={styles.templateEditor}>
          <h1 className={styles.editorHeader}>Live Editor</h1>
          <br/>
          <Input label={"Title"} name={'title'} value={title} type={"input"} onChange={onChange} />
          <Input label={"Description"} type={"textarea"} name={'description'} value={description} onChange={onChange} />
          <Input label={"Image Link"} type={"input"} name={'image'} value={image} onChange={onChange} />
          <Input label={"Button Title"} type={"input"} name={'buttonTitle'} value={buttonTitle} onChange={onChange} />
          <Input label={"Button Link"} type={"input"} name={'buttonLink'} value={buttonLink} onChange={onChange} />
        </div>
    )
}

export default Editor