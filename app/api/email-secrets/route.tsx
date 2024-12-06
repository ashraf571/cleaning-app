import { NextResponse } from "next/server";

export default function handler(){

    return { serviceId: process.env.SERVICE_ID, publicKey: process.env.PUBLIC_KEY }
    
}