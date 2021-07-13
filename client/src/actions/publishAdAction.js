export const moveToNextStageAction = (form, index) => ({
    type: "STAGE_DONE",
    form,
    index,
});

export const moveToPreviewsStageAction = (index) => ({
    type: "PREVIEW_STAGE",
    index,
});
