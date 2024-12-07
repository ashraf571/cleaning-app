
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    
    const secrets = { serviceId: process.env.SERVICE_ID, publicKey: process.env.PUBLIC_KEY }
    return NextResponse.json(secrets);

}