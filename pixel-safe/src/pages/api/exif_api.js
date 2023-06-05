import { ExifImage} from "exif";

export default function get_exif(req, res) {
    try {
        new ExifImage({ image : req.file }, function (error, exifData) {
            if (error)
                res.status(200).json('Error: '+error.message);
            else
                res.status(200).json("got data"); // Do something with your data!
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
}