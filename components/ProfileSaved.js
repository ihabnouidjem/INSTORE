import { setUser } from "@/features/userSlice";
import { appState } from "@/pages/_app";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProfileSaved() {
  const saved = useSelector((state) => state.user.saved);
  const user = useSelector((state) => state.user.user);
  const { postUserItems, updatesState, setUpdatesState } = useContext(appState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.newSaved > 0) {
      postUserItems(user.uid, { newSaved: 0 });
    }
  }, [user]);
  useEffect(() => {
    if (updatesState?.updateUser) {
      dispatch(setUser({ ...user, newSaved: 0 }));
      setUpdatesState({ ...updatesState, updateUser: false });
    }
  }, [updatesState]);
  return (
    <div className="w-full flex flex-col items-center px-3 sm:px-8 py-3">
      <div className="w-[min(1500px,100%)] grid grid-cols-repeatPHNProducts sm:grid-cols-repeatTABProducts lg:grid-cols-repeatProducts gap-3 sm:gap-6">
        {saved?.length > 0 &&
          saved.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
}

export default ProfileSaved;
