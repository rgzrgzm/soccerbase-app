import { ApiResponse } from "@/app/interfaces";

export async function getData(): Promise<ApiResponse> {
  try {
    const data = await fetch(`${process.env.API_URL}`, {
      next: {
        revalidate: 0,
      },
    });

    const res = await data.json();
    console.log(res)
    return res;
  } catch (error) {
    console.log(error);

    throw new Error("failed to fetch data from api response");
  }
}
