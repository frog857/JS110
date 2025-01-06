
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

- The building blocks are [cubes](https://en.wikipedia.org/wiki/Cube)
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- You cannot leave gaps between blocks

Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

Input: Integer representing number of total blocks
Output: Integer representing leftover blocks after building tallest structure

Rules:
- Explicit:
	- Structure will have layers
	- Top layer will be a single block
	- Block in an upper layer must be supported by four blocks from a lower layer
	- Block in a lower layer can support more than one block
	- Cannot be gaps
- Implicit:
	- Layer number corresponds with the squareroot of number of blocks on that layer
		- Layer number * layerNumber = total blocks in layer

Questions:
- Is this a pyramid? (YES)
- How many upper layer blocks can a lower layer block support? 4? (Max, 4)
- Must a lower layer block support the maximum number of blocks it can? (NO)
- What constitutes a gap in blocks?
- Will there always be blocks leftover? (NO) What if there aren't? (0 leftover)

Mental Model:
- 1 block (1 x 1)
- 4 blocks (2 x 2)
- 9 blocks (3 x 3)
- 16 blocks (4 x 4)

Data Structure:
- Array of integers representing layer numbers
- Array of integers representing layer total blocks
- Object with key of layer number, value of total blocks
- Plain integer representing validLayers constructed

Algorithm:
- Store the passed in int as totalBlocks
- Start with the first layer (layer 1)
- create a leftoverBlocks variable
- Identify if we have enough blocks to construct a valid layer here
	- If so, construct the layer
	- subtract the amount of blocks used to build from totalBlocks
- Repeat step 3 until we don't have enough blocks to construct a valid layer
- Return the leftover blocks variable
- 
- 