import mongoose from 'mongoose';

const adsSchema = mongoose.Schema({
  name: String,
  companyUrl: String,
  title: String,
  description: String,
  image: String,
});

var ads = mongoose.model('Ads', adsSchema);

export default ads;
