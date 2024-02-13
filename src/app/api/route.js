import { NextResponse } from 'next/server';
import User from '@/server/models/user';
export async function GET() {
  try {
    const users = await User.findAll();
    return NextResponse.json(users);
  } catch (ere) {
    console.log(ere);
  }
}
