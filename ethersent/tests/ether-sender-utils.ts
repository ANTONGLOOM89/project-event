import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { EtherSent } from "../generated/EtherSender/EtherSender"

export function createEtherSentEvent(
  from: Address,
  to: Address,
  amount: BigInt
): EtherSent {
  let etherSentEvent = changetype<EtherSent>(newMockEvent())

  etherSentEvent.parameters = new Array()

  etherSentEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  etherSentEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  etherSentEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return etherSentEvent
}
