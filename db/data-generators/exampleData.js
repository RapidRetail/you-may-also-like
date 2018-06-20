// this is the basic data structure needed to support the front-end
const exampleData = [{
  id: 1,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00001.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00002.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$3 USD'
},
{
  id: 2,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00003.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00004.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$6 USD'
},
{
  id: 3,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00005.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00006.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$9 USD'
},
{
  id: 4,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00007.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00008.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$12 USD'
},
{
  id: 5,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00009.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00010.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$15 USD'
},
{
  id: 6,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00011.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00012.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$18 USD'
},
{
  id: 7,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00013.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00014.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$21 USD'
},
{
  id: 8,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image000015.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image000016.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$24 USD'
},
{
  id: 9,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image000017.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image000018.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$27 USD'
},
{
  id: 10,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00019.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00020.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$30 USD'
},
{
  id: 11,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00021.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00022.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$33 USD'
},
{
  id: 12,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00023.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00024.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$36 USD'
},
{
  id: 13,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00025.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00026.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$39 USD'
},
{
  id: 14,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00027.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00028.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$42 USD'
},
{
  id: 15,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00029.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00030.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$45 USD'
},
{
  id: 16,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00031.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00032.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$48 USD'
},
{
  id: 17,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00033.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00034.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$51 USD'
},
{
  id: 18,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00035.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00036.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$54 USD'
},
{
  id: 19,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00037.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00038.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$57 USD'
},
{
  id: 20,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00039.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00040.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$60 USD'
},
{
  id: 21,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00041.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00042.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$63 USD'
},
{
  id: 22,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00043.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00044.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$66 USD'
},
{
  id: 23,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00045.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00046.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$69 USD'
},
{
  id: 24,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00047.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00048.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$72 USD'
},
{
  id: 25,
  title: 'Women Tops Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00049.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00050.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$75 USD'
},
{
  id: 26,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00051.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00052.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$78 USD'
},
{
  id: 27,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00053.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00054.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$81 USD'
},
{
  id: 28,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00055.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00056.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$84 USD'
},
{
  id: 29,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00057.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00058.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$87 USD'
},
{
  id: 30,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00059.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00060.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$90 USD'
},
{
  id: 31,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00061.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00062.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$93 USD'
},
{
  id: 32,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00063.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00064.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$96 USD'
},
{
  id: 33,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00065.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00066.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$99 USD'
},
{
  id: 34,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00067.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00068.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$102 USD'
},
{
  id: 35,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00069.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00070.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$105 USD'
},
{
  id: 36,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00071.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00072.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$108 USD'
},
{
  id: 37,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00073.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00074.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$111 USD'
},
{
  id: 38,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00075.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00076.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$114 USD'
},
{
  id: 39,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00077.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00078.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$117 USD'
},
{
  id: 40,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00079.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00080.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$120 USD'
},
{
  id: 41,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00081.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00082.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$123 USD'
},
{
  id: 42,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00083.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00084.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$126 USD'
},
{
  id: 43,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00085.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00086.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$129 USD'
},
{
  id: 44,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00087.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00088.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$132 USD'
},
{
  id: 45,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00089.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00090.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$135 USD'
},
{
  id: 46,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00091.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00092.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$138 USD'
},
{
  id: 47,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00093.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00094.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$141 USD'
},
{
  id: 48,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00095.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00096.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$144 USD'
},
{
  id: 49,
  title: 'Women Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00097.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00098.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$147 USD'
},
{
  id: 50,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00099.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00100.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$150 USD'
},
{
  id: 51,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00099.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00100.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$153 USD'
},
{
  id: 52,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00099.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00098.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$156 USD'
},
{
  id: 53,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00097.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00096.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$159 USD'
},
{
  id: 54,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00095.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00094.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$162 USD'
},
{
  id: 55,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00093.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00092.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$165 USD'
},
{
  id: 56,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00091.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00090.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$168 USD'
},
{
  id: 57,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00089.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00088.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$171 USD'
},
{
  id: 58,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00087.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00086.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$174 USD'
},
{
  id: 59,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00085.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00084.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$177 USD'
},
{
  id: 60,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00083.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00082.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$180 USD'
},
{
  id: 61,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00081.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00080.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$183 USD'
},
{
  id: 62,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00079.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00078.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$186 USD'
},
{
  id: 63,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00077.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00076.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$189 USD'
},
{
  id: 64,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00075.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00074.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$192 USD'
},
{
  id: 65,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00073.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00072.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$195 USD'
},
{
  id: 66,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00071.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00070.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$198 USD'
},
{
  id: 67,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00069.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00068.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$201 USD'
},
{
  id: 68,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00067.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00066.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$204 USD'
},
{
  id: 69,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00065.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00064.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$207 USD'
},
{
  id: 70,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00063.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00062.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$210 USD'
},
{
  id: 71,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00061.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00060.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$213 USD'
},
{
  id: 72,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00059.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00058.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$216 USD'
},
{
  id: 73,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00057.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00056.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$219 USD'
},
{
  id: 74,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00055.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00054.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$222 USD'
},
{
  id: 75,
  title: 'Men Tops  Shirts',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00053.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00052.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$225 USD'
},
{
  id: 76,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00051.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00050.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$228 USD'
},
{
  id: 77,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00049.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00048.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$231 USD'
},
{
  id: 78,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00047.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00046.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$234 USD'
},
{
  id: 79,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00045.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00044.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$237 USD'
},
{
  id: 80,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00043.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00042.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$240 USD'
},
{
  id: 81,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00041.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00040.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$243 USD'
},
{
  id: 82,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00039.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00038.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$246 USD'
},
{
  id: 83,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00037.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00036.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$249 USD'
},
{
  id: 84,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00035.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00034.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$252 USD'
},
{
  id: 85,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00033.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00032.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$255 USD'
},
{
  id: 86,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00031.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00030.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$258 USD'
},
{
  id: 87,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00029.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00028.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$261 USD'
},
{
  id: 88,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00027.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00026.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$264 USD'
},
{
  id: 89,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00025.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00024.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$267 USD'
},
{
  id: 90,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00023.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00022.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$270 USD'
},
{
  id: 91,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00021.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00020.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$273 USD'
},
{
  id: 92,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00019.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00018.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$276 USD'
},
{
  id: 93,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00017.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00016.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$279 USD'
},
{
  id: 94,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00015.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00014.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$282 USD'
},
{
  id: 95,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00013.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00012.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$285 USD'
},
{
  id: 96,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00011.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00010.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$288 USD'
},
{
  id: 97,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00009.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00008.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$291 USD'
},
{
  id: 98,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00007.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00006.jpg',
  color: ['DeepSkyBlue', 'DimGrey', 'FireBrick', 'Fuchsia'],
  price: '$294 USD'
},
{
  id: 99,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00005.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00004.jpg',
  color: ['Moccasin', 'Olive', 'OrangeRed', 'OldLace'],
  price: '$297 USD'
},
{
  id: 100,
  title: 'Men Bottoms Pants',
  main: 'http://lululemonades-related.s3.amazonaws.com/image00003.jpg',
  hover: 'http://lululemonades-related.s3.amazonaws.com/image00002.jpg',
  color: ['BlanchedAlmond', 'BurlyWood', 'CadetBlue', 'Chocolate'],
  price: '$300 USD'
}];

module.exports = exampleData;
