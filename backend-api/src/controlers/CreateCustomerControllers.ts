import {FastifyRequest,FastifyReply} from "fastify"

import {CreateCustomerServices} from '../services/CreateCustomerServices'

class CreateCustomerController{
    async handle(request:FastifyRequest,reply:FastifyReply){
    const {name, email} = request.body as {name: string, email: string};
    console.log(name);
    console.log(email);
    const customerServices = new CreateCustomerServices()

    const customer = await customerServices.execute({name,email});


    reply.send(customer)
    }
}
export{CreateCustomerController}