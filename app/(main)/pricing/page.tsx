import React from "react";
import { createClient } from "@/utils/supabase/server";
import {
  getProducts,
  getSubscription,
  getUser,
} from "@/utils/supabase/queries";
import Pricing from "@/components/ui/Pricing";

export default async function Examples() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase),
  ]);

  return (
    <Pricing
      products={products || []}
      subscription={subscription}
      user={user}
    />
  );
}
