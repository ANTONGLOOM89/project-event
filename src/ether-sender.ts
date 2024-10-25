import { EtherSent as EtherSentEvent } from "../generated/EtherSender/EtherSender"
import { EtherSent } from "../generated/schema"

export function handleEtherSent(event: EtherSentEvent): void {
  let entity = new EtherSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
