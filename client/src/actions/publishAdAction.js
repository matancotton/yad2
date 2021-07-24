export const resetAdAction = () => ({
    type: "RESET_AD",
});

export const moveToNextStageAction = (form, index) => ({
    type: "STAGE_DONE",
    form,
    index,
});

export const moveToPreviewsStageAction = (index) => ({
    type: "PREVIEW_STAGE",
    index,
});

export const updateStageAction = (index) => ({
    type: "UPDATE_STAGE",
    index,
});
