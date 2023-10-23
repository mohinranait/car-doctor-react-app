import PropTypes from 'prop-types';

const SectionHeader = ({subTitle="", title="", text=""}) => {
    return (
        <>
            <div className="box mb-8">
                <h2 className='text-center text-lg text-primary font-semibold'>{subTitle}</h2>
                <h2 className='text-center py-2 text-3xl lg:text-4xl text-title font-semibold'>{title}</h2>
                <p className='text-base text-muted font-medium text-center lg:w-1/2 mx-auto'>{text}</p>
            </div>
        </>
    );
};

SectionHeader.propTypes = {
    title : PropTypes.string,
    subTitle : PropTypes.string,
    text : PropTypes.string,
}

export default SectionHeader;