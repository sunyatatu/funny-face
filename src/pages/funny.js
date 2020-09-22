import { List,Avatar } from 'antd';
import React from 'react';
// import axios from 'axios';
// import fetchJsonp from 'fetch-jsonp';
export default class Funny extends React.Component{
   
        state = {
           
             content : '',
             hashId:''
        }
    



    componentDidMount(){
        const url = "http://v.juhe.cn/joke/content/list.php?sort=desc&page=5&pagesize=5&time=1418816972&key=d133f2172636f3fdcbfb9878d97a156b";
        

        fetch(url).then(
            response => {
            return response.json()
        }).then(data => {
            console.log(data)
        }).catch((e) => {
            alert(e.message)
        })

        // axios.get(url).then(
        //     response => {
        //         // const results = response.data;
        //         console.log(response);
                     
        //     }
        // )

        // fetchJsonp(url).then(
        //     response => {
        //     return response.json()
        // }).then(data => {
        //     console.log(data)
        // }).catch((e) => {
        //     alert(e.message)
        // }) 
    }




    render(){


        const {content,title} = this.state;

        const data = [
            {
                title: 'Ant Design Title 1',
              },
              {
                title: 'Ant Design Title 2',
              },
              {
                title: 'Ant Design Title 3',
              },
              {
                title: 'Ant Design Title 4',
              },
        ];

        return <div>
            <h1>欢迎菜鸟</h1>
            <List 
                itemLayout="horizontal"
                dataSource={data}
                renderItem={
                    item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="" />}
                                title={<a href="https://ant.design"></a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            ></List.Item.Meta>
                        </List.Item>
                    )
                }
            >

            </List>
        </div>;
    }
}


