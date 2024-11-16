// import ContainerB from '@/components/ContainerB';
import MainLayout from '../layouts/MainLayout';

export default function Home() {

  return (
    <>
      <MainLayout>
        {/* <ContainerB> */}
            Hello world!
        {/* </ContainerB> */}
      </MainLayout>
    </>
  );
}


// export const getServerSideProps = wrapper.getServerSideProps(
//   store => async () =>
//   {
//       const dispatch = store.dispatch as NextThunkDispatch;
//       await dispatch(fetchTracks());
//       await dispatch(fetchAlbum());
//       await dispatch(fetchPlaylists());

//       return { props: {} }
//   }
// );
