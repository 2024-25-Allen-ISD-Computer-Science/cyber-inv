"use server"
import { NavItemProps } from "@/components/Comp/Navbar"
import { pb } from "@/lib/pocketbase"

const record = await pb.collection('Accounts').getOne(pb.authStore.token, {
    expand: 'UserName,Score',
  });
export default function navbarProps(){

    return record

}