import React from 'react'

const MediaSplit = () => {
    return (
    <section className="section-spacer">
        <div className="flex justify-between">
            <div className="w-full lg:w-1/2">
                <img className="thumbnail" src="https://via.placeholder.com/540x280.png?text=GalleryImage" />
            </div>
            <div className="w-full lg:w-1/2">
                <div className="lg:flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <img className="thumbnail" src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img className="thumbnail" src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default MediaSplit
