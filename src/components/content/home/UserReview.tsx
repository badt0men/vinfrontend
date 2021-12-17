import { Box, Heading, useColorModeValue as mode, Text, Flex, Grid, HStack } from '@chakra-ui/react'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { IoStarSharp, IoStarOutline } from 'react-icons/io5'
import Slider from "react-slick";

type Props = {
    imageUrl: string,
    name: string,
    review: string,
    rating: number,
    position: string,
}

const settings = {
    className: "",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
          }
        }
      ]
  };

export default function UserReview() {
    return (
        <Box maxW="7xl" mx="auto" bgColor={mode("skyBlue", "deepBlue.100")} mt={["90%", "0"]} pb={["32", "52"]}>
            <Box pt="20" pb="8">
                <Heading as="h1" fontSize="28" fontWeight="medium" textAlign="center">Users Review</Heading>
                <Text textAlign="center" py="6" px={["6", "0"]} fontSize={["17","16"]} fontWeight="regular">Whether you’re just buying a car, or just learning about your own <br />We’ve got you covered</Text>
            </Box>
            <Box maxW="5xl" mx="auto" pb="16">
                <Slider {...settings}>
                {ReviewItems.map(review => (
                    <Grid w="320px" h="240px" maxW="95%" mt="14" bg={mode('white', 'deepBlue.500')} key="index" rounded="xl"> 
                        <GridComponent imageUrl={review.imageUrl} name={review.name} review={review.review} rating={review.star} position={review.position} />
                    </Grid>
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

const GridComponent = (props: Props) => {
    return (
    <Box>  
        <Box p="9" bgImage={props.imageUrl} bgSize="cover" bgRepeat="no-repeat" pos="absolute" borderRadius="50%" ml="35px" mt="-50px" shadow="lg"/>
        <Flex justify="space-between" px="4" >
            <Text color="red.300">
                <FaQuoteLeft size="55px" />
            </Text>
            <HStack spacing="1" pt="4" color="star-color">
                {
                    props.rating === 5 ? <FiveStar /> :
                    props.rating === 4 ? <FourStar /> : 
                    props.rating === 3 ? <ThreeStar /> : 
                    props.rating === 2 ? <TwoStar /> : 
                    props.rating === 1 ? <OneStar /> : 
                    <OneStar />
                }
            </HStack>
        </Flex>
        <Text textAlign="center" py="2" color="red.300">-------------------------------------</Text>
        <Box px="6">
            <Text fontSize="13" fontWeight="thin" textAlign="left">{props.review}</Text>
            <HStack>
                <Text fontSize="13" fontWeight="thin" textAlign="left" pt="6">
                    {props.name} |
                </Text>
                <Text fontSize="13" fontWeight="medium" textAlign="left" pt="6" color="red.500">
                    {props.position}
                </Text>
            </HStack>
        </Box>
    </Box>
    )}

    const ReviewItems = [
        {
            name: 'Mary Edwin',
            position: 'Marketer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 5,
            imageUrl: '../image/assets/userAvater.jpeg'
        },
        {
            name: 'Maxwell Iyoh',
            position: 'Software Engineer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 4,
            imageUrl: '../image/assets/userAvater2.jpeg'
        },
        {
            name: 'Bolingo Shepards',
            position: 'Photographer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
        {
            name: 'Matt KaySule',
            position: 'Web Developer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
        {
            name: 'Greg Shaw',
            position: 'Engineer',
            review: 'A test drive of a car you are going to buy shouldn’t be like a calm Sunday cruise. You have to be prepared for it, know what to expect, what is right and what is wrong.',
            star: 1,
            imageUrl: '../image/assets/userAvater3.jpeg'
        },
    ]

    const FiveStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            </>
        )
    }
    const FourStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const ThreeStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const TwoStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }
    const OneStar = () => {
        return (
            <>
            <IoStarSharp size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            <IoStarOutline size="17px" />
            </>
        )
    }