import React from "react";
import LayoutOutSide from "../../components/Layouts/LayoutOutSide";
import Container from "../../components/globals/Container";
import {
  GroupClassesFilter,
  GroupClassesFilterMob,
} from "../../components/globals/GroupClassesFilter";
import GroupClassPage from "./GroupClassPage";
import GroupClassPageHeader from "./GroupClassPageHeader";

const GroupClassAll = () => {
  return (
    <div>
      <LayoutOutSide>
        <Container>
          <GroupClassPageHeader />
          <div className="hidden sticky  z-10 top-20 lg:block">
            <GroupClassesFilter />
          </div>
          <div className="sticky  z-10 top-20">
            <GroupClassesFilterMob />
          </div>
          <div className="relative z-0">
            <GroupClassPage />
          </div>
        </Container>
      </LayoutOutSide>
    </div>
  );
};

export default GroupClassAll;
