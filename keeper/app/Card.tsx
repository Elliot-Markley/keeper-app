/* eslint-disable @next/next/no-img-element */
import { TCard } from "./types";

export function Card(props: TCard) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{props.name}</h1>
      <img className=" w-40" src={props.img} alt="img" />
      <p>{props.email}</p>
      <p>{props.tel}</p>
    </div>
  );
}
