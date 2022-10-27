import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});



const Corse = () => {

  const getCoures = useLoaderData()
  const { about, balance, company, id, name, picture, title, urlPdf
  } = getCoures;

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name : {name} </Text>
          <Text>Company : {company} </Text>
          <Text>{title} </Text> 
          <Text>About: {about}</Text>
        </View>
        <View style={styles.section}>
          
          {/* <img src={} alt="" srcset="" /> */}
        </View>
      </Page>
    </Document>
  );

  // console.log(getCoures);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="blurImg p-3 rounded-lg">
        <div className="block md:flex">
          <div>
            <img alt="ecommerce" className="h-[80%] md:h-[40%] rounded" src={picture} />
          </div>
          <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className='flex justify-between'>
              <h2 className="text-lg font-bold title-font text-violet-800 tracking-widest">Course : {name}</h2>
              <div className='flex flex-col'>
                <h2 className='text-lg md:text-2xl  font-semibold text-red-500 '>Price : {balance}</h2>
                <div className="border-1 border-red-400 bg-indigo-700 p-1 text-white w-fit">
                  <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                  </PDFDownloadLink>
                </div>
              </div>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
            <h1 className=' text-base text-red-600 border-2 border-slate-900 p-1 w-fit rounded-md hover:bg-cyan-600 hover:text-white'>Author : {company}</h1>
            <div className="flex mb-4">


            </div>
            <p className="leading-relaxed text-2xl text-blue-700">{about.slice(0, 600)}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


            </div>
            <div className="flex justify-between">
              <p className="title-font font-medium text-2xl text-gray-900">{balance}</p>


              <Link to='/course/chackout' className='button bg-red-700'>Chack Out</Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Corse;