/* eslint-disable @next/next/no-img-element */
import { card } from "./types";

export function Card(props: card) {
  return (
    <div className="grid gap-1 mx-5 mb-10 text-center w-fit bg-emerald-300 rounded-lg text-black">
      <h1 className="text-2xl">{props.name}</h1>
      <img src={props.img} alt="img" className="w-48" />
      <h2>{props.tel}</h2>
      <p>{props.email}</p>
    </div>
  );
}
