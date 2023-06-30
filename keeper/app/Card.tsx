/* eslint-disable @next/next/no-img-element */
import { TCard } from "./types";

export function Card(props: TCard) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="img" />
      <p>{props.email}</p>
      <p>{props.tel}</p>
    </div>
  );
}
