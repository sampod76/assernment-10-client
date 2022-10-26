import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';


const Corses = () => {
    const getCoures = useLoaderData()
   

    return (
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">

                {
                    getCoures.map(cor => <Card cor={cor} key={cor.id}>
                        
                    </Card>)
                }

            </div>
        </div>
    );
};

export default Corses;