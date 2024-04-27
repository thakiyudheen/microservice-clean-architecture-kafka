import {Schema} from 'mongoose'
import { producer } from '../../index';


export const userCreatedProducer = async(
    data:{
        _id: Schema.Types.ObjectId;
        username: string;
        email: string;
        password:string;
        role: string;
        isBlocked:Boolean
    }
)=>{
    try {
        await producer.connect();

        if(data.role === 'user' || data.role === 'admin'){
            const message = {
                topic: 'to-user',
                messages: [{
                    key: 'userCreated',
                    value: JSON.stringify(data)
                }]
            };
            
            await  producer.send(message);
            console.log('stored thing in the message broker');
            
        }else{
            throw new Error("undefined role")
        }

    } catch (error:any) {
        console.error('this is thakiyudheen kafka produce error:',error?.message)
    }finally{
        await producer.disconnect();
    }
}