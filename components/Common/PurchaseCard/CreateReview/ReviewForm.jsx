import { useField } from 'formik';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewForm = () => {
    const [reviewField, reviewMeta] = useField('review');
    const [ratingField, ratingMeta, ratingHelpers] = useField('rating');

    const filledStar = Array(parseInt(ratingField.value)).fill('');
    const emptyStar = Array(5 - parseInt(ratingField.value)).fill('');

    const handleRating = (ratingNumber) => {
        ratingHelpers.setValue(ratingNumber)
    }
    return (
        <>
            <label
                className="block text-left text-lg text-primary font-trade-gothic-bold mb-2">Select ratings:</label>
            <div className="smd:w-2/3 grid grid-cols-5 gap-2">
                {
                    filledStar?.map((star, index) => <AiFillStar
                        key={index}
                        onClick={() => handleRating(index + 1)}
                        className="text-4xl cursor-pointer" />)
                }
                {
                    emptyStar?.map((star, index) => <AiOutlineStar
                        key={index + 1 + parseInt(ratingField.value)}
                        onClick={() => handleRating(index + 1 + parseInt(ratingField.value))}
                        className="text-4xl cursor-pointer" />)
                }
            </div>
            {
                ratingMeta.error
                    ? <div className="text-left text-red-500 text-xs italic mb-2">{ratingMeta.error}</div>
                    : null
            }
            <label
                htmlFor="review"
                className="block text-left text-lg text-primary font-trade-gothic-bold mt-3 mb-2">Write your review:</label>
            <textarea
                rows={3}
                {...reviewField}
                className="w-full outline-none resize-none p-2 border rounded" />
            {
                reviewMeta.touched && reviewMeta.error
                    ? <div className="text-left text-red-500 text-xs italic mb-2">{reviewMeta.error}</div>
                    : null
            }
        </>
    );
};

export default ReviewForm;