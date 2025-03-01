import z from 'zod'

export const authSchema = z.object( {
    email: z.string().email(),
    name: z.string().min( 8 ).max( 25 ),
    phone: z.string().min( 8 ).max( 20 ),
    message: z.string().min( 1 ).max( 500 )
} )
