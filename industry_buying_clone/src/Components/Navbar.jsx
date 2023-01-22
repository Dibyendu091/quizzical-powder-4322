import React from 'react'

import {
	Box,
	Container,
	Flex,
	HStack,
	Image,
	Input,
	Select,
	VStack,
} from "@chakra-ui/react";

import banner from '../Logo/logo.png'



const Navbar = () => {
	return (
		<Box
			mt='20px'
			h='65px'
			border='1px solid green'
			w='100%'
			bg='#232F3E'>
			<Flex>
				<Image src={banner} ml='150px' mt='10px' w='150px' />
				<Select
					width='140px'
					ml='55px'
					h='38px'
					border='none'
					fontWeight={"500"}
					color='white'
					borderBottomRightRadius='0px' borderTopRightRadius='0px'
					fontSize='13px'
					mt='15px'
					bg='#E9611E' >

					<option value='option1'>All Categories</option>
					<option value='option2'>Abrasives</option>
					<option value='option3'>Option 3</option>
				</Select>
				<Input
					border='none'
					w='28%'
					h='38px'
					bg='white'
					placeholder="Search Products by title, category, SKU or product etc..."
					borderBottomLeftRadius='0px'
					borderTopLeftRadius='0px'
					mt='15px'
					fontSize='15px'
				/>
			</Flex>
		</Box>
	)
}

export default Navbar
