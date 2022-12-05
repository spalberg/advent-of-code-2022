import scala.util.Using
import scala.io.Source

@main def part1: Unit =
  println(s"Part 1: ${part1(loadInput())}")

def loadInput(): String =
  Using.resource(Source.fromFile("../input.txt"))(_.mkString)

def part1(input: String): String = input

enum RPS:
  case Rock, Paper, Scissors

  def winsAgainst: RPS = fromOrdinal((ordinal + 2) % 3)
  def losesAgainst: RPS = fromOrdinal((ordinal + 1) % 3)
end RPS
