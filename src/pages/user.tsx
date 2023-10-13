import PageLayout from "@/containers/layout/PageLayout";
import Header from "@/components/Header";
import SearchInput from "@/components/inputs/searchinput";
import SearchResults from "@/components/Product";
import React from "react";
import UserDashboard from "@/components/user";

export default function User(){
    return(
        <>
            <PageLayout>
                <UserDashboard/>

            </PageLayout>
        </>
    )
}
