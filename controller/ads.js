import ads from '../models/adsModel.js';

export const getAds = async (req, res) => {
  try {
    const adsDetails = await ads.find({});
    res.json(adsDetails);
  } catch (error) {
    console.log('something went wrong', error);
    return res.status(500).send('Internal server error');
  }
};

export const adsSearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const name = new RegExp(searchQuery, 'i');

    const adsdetails = await ads.find({ name });
    return res.status(200).json(adsdetails);
  } catch (error) {
    console.log('something went wrong', error);
    return res.status(500).send('Internal server error');
  }
};

export const createAds = (req, res) => {
  try {
    const adsCreate = new ads(req.body);
    adsCreate.save((err, data) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ message: 'Data is not inserted properly' });
      } else {
        return res.status(201).json(data);
      }
    });
  } catch (error) {
    console.log('something went wrong', error);
    return res.status(500).send('Internal server error');
  }
};
