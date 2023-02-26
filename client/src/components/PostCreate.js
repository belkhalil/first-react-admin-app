import React from "react"
import { Create,SimpleForm,DateInput, TextInput } from "react-admin"

const PostCreate = ()=>{
    return(
<Create>
    <SimpleForm>
        <TextInput source="title"/>
        <TextInput multiline source="body"/>
        <DateInput label='Published' source="publishedAt"/>
    </SimpleForm>
</Create>
    )
}
export default PostCreate