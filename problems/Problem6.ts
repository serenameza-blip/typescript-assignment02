// Problem 6
import { User } from "../types";

// Function that verifies if a user has all required attributes
export function verifyUser(user: User | null | undefined): User | string[] {
    // TODO: Implement logic to check for missing properties and return either the user object or an array of missing properties
    const missingProp: string[] = [];
    if (!user) {
        missingProp.push("userData");
    }

    if (!user?.id) { missingProp.push("id");}
    if (!user?.name) { missingProp.push("name");}
    if (!user?.address) { missingProp.push("address");}
    if (!user?.address?.street) { missingProp.push("street");}
    if (!user?.address?.city) { missingProp.push("city");}

    if (missingProp.length === 0) {
        return user!;
    }
    return missingProp;
}

